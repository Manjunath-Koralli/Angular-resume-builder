import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tasksTransform',
})
export class TasksTransformPipe implements PipeTransform {
  transform(value: string): string {
    const splitby = '\n';
    let html = '';
    const splittedTextTasks = value.split(splitby);
    console.log(splittedTextTasks)
    for (let i = 0; i < splittedTextTasks.length; i++) {
      html +=  `
        ${splittedTextTasks[i]}
      ` 
      // return `${splittedTextTasks[i]}<br>`;
    }
    //console.log(html)
    return html;
  }
}
