import createEmotionServer from '@emotion/server/create-instance';
import createEmotionCache from './createEmotionCache';
import ReactDOMServer from 'react-dom/server';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import christmasTheme from './themes/christmasTheme';
import {CacheProvider} from '@emotion/react';
import App from './client/components/App';
import React from 'react';
import fs from 'fs';
import path from 'path';
import express from 'express';

const app = express();
const PORT = process.env.PORT;

app.use('/static', express.static(path.resolve('dist')));

/**
*
* @param {Request} req
* @param {Response} res
*/
const renderReactApp = async (req, res) => {
  const emotionCache = createEmotionCache();
  const {extractCriticalToChunks, constructStyleTagsFromChunks} =
    createEmotionServer(emotionCache);

  const reactHtml = ReactDOMServer.renderToString(
    <React.StrictMode>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={christmasTheme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </CacheProvider>
    </React.StrictMode>
  );

  // Extract the CSS
  const emotionChunks = extractCriticalToChunks(reactHtml);
  const emotionCss = constructStyleTagsFromChunks(emotionChunks);

  // Add CSS and HTML to template file
  const indexHtml = await fs.promises.readFile(`${path.resolve('dist')}/index.html`, 'utf-8');
  const renderedApp = indexHtml
    .replace('<style></style>', emotionCss)
    .replace('<div id="root"></div>', `<div id="root">${reactHtml}</div>`);

  res.status(200).send(renderedApp);
};

app.use(renderReactApp);
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});