import Taggle from 'taggle';
import { colors } from './colors';

const colorFormatter = element => {
  const colorsLength = colors.length;
  const min = Math.ceil(0);
  const max = Math.floor(colorsLength);
  const classIndex = Math.floor(Math.random() * (max - min + 1)) + min;
  element.classList.add(colors[classIndex]);
};

const onBeforeTagAdd = (event, tag, setErrors) => {
  if (/\s/.test(tag)) {
    setErrors({
      status: true, showError: true, type: 'tag', message: [`The '${tag}' tag format is invalid!`]
    });
    return false;
  }
  if (tag.length <= 2) {
    setErrors({
      status: true, showError: true, type: 'tag', message: [`The '${tag}' tag is too short!`]
    });
    return false;
  }
  setErrors({
    showError: false, status: false, message: [], type: null
  });
  return tag;
};

export const initializeTagsEditor = (setTagsInState, setErrors, tags) => {
  // eslint-disable-next-line no-undef
  $(document).ready(() => {
    const taggle = new Taggle('tags', {
      tags,
      duplicateTagClass: 'bounce',
      additionalTagClasses: '',
      hiddenInputName: 'tags[]',
      delimeter: [',', ' ', ''],
      placeholder: 'Enter tags that you feel are related to your article.',
      tagFormatter: colorFormatter,
      onBeforeTagAdd: (event, tag) => onBeforeTagAdd(event, tag, setErrors),
      onTagAdd: (event, tag) => setTagsInState(taggle.getTagValues()),
      onTagRemove: (event, tag) => setTagsInState(taggle.getTagValues()),
    });
  });
};
