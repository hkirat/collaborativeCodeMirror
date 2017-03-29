/* global Y, CodeMirror */

// initialize a shared object. This function call returns a promise!
Y({
  db: {
    name: 'memory'
  },
  connector: {
    name: 'websockets-client',
    room: 'codemirror-example'
  },
  sourceDir: '/bower_components',
  share: {
    editor1: 'Text', // y.share.editor1 is of type Y.Text
    editor2: 'Text', // y.share.editor2 is of type Y.Text
    editor3: 'Text' // y.share.editor3 is of type Y.Text
  }
}).then(function (y) {
  window.yCodeMirror = y;
  var cm1 = CodeMirror(document.querySelector('#codeMirrorContainerHTML'), {
    mode: 'Javascript',
    lineNumbers: true
  })
  var cm2 = CodeMirror(document.querySelector('#codeMirrorContainerJS'), {
    mode: 'css',
    lineNumbers: true
  })
  var cm3 = CodeMirror(document.querySelector('#codeMirrorContainerCSS'), {
    mode: 'html',
    lineNumbers: true
  })

  y.share.editor1.bindCodeMirror(cm1)
  y.share.editor2.bindCodeMirror(cm2)
  y.share.editor3.bindCodeMirror(cm3)
})
