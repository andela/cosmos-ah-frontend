/* eslint-disable no-undef */
import MediumEditor from 'medium-editor';
import { USER_TOKEN } from './authToken';

let articleImages = [];

export const editorHandler = (setBodyInState, setImagesInState) => {
  const editor = new MediumEditor('.editor', {
    placeholder: {
      text: 'Tell your story'
    },
    embeds: {
      oembedProxy: 'https://medium.iframe.ly/api/oembed?iframe=1',
    },
    toolbar: {
      allowMultiParagraphSelection: true,
      buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote'],
      diffLeft: -10,
      diffTop: -10,
      firstButtonClass: 'medium-editor-button-first',
      lastButtonClass: 'medium-editor-button-last',
      relativeContainer: null,
      standardizeSelectionStart: false,
      static: false,
      align: 'center',
      sticky: true,
      updateOnEmptySelection: false
    },
  });

  $('.editor').mediumInsert({
    editor,
    addons: {
      images: {
        deleteMethod: 'DELETE',
        fileUploadOptions: {
          url: `https://author-haven-stage.herokuapp.com/api/v1/image/articles/upload/${USER_TOKEN}`,
        },
        fileDeleteOptions: {
          url: 'https://author-haven-stage.herokuapp.com/api/v1/image/articles/destroy/'
        },
        uploadCompleted: (el, { result: { files } }) => {
          articleImages = [...articleImages, files[0].url];
          setImagesInState(articleImages);
        },
      },
    }
  });

  editor.subscribe('editableInput', (eventObj, editable) => {
    const [{ value }] = Object.values(editor.serialize());
    setBodyInState(value);
  });
  return editor;
};
