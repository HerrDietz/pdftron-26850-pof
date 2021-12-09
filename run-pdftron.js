import WebViewer from '@pdftron/webviewer'
WebViewer({
  path: 'dist/public/webviewer',
}, document.getElementById('viewer'))
    .then(instance => {
      instance.enableFeatures([instance.Feature.Print]);
    });