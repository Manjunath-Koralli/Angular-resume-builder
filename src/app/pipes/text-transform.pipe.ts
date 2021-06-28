import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTransform',
})
export class TextTransformPipe implements PipeTransform {
  transform(value: string): string {
    const splitByLinkedIn = 'https://www.linkedin.com/in/';
    const splitByGithub = 'https://github.com/';
    if (value.includes('https://www.linkedin.com')) {
      const splittedTextLinkedIn = value.split(splitByLinkedIn);
      return splittedTextLinkedIn[1];
    } 
    else if(value.includes('https://')) {
      const splittedTextGithub = value.split(splitByGithub);
      return splittedTextGithub[1];
    }
    else {
      return value;
    }
  }
}
