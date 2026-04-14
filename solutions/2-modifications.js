import _ from 'lodash';

// BEGIN
export default function normalize(lesson) {
  
  if (lesson.name) {
    const name = lesson.name.toLowerCase();
    lesson.name = name.charAt(0).toUpperCase() + name.slice(1);
  }
  
  if (lesson.description) {
    lesson.description = lesson.description.toLowerCase();
  }
}
  // END