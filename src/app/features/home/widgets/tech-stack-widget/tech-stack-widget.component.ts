import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import {
  faPython,
  faJs,
  faDev,
  faDiscord,
  faGithub,
  faNodeJs,
  faGitAlt,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-tech-stack-widget',
  standalone: true,
  templateUrl: './tech-stack-widget.component.html',
  styleUrls: ['./tech-stack-widget.component.scss'],
  imports: [FontAwesomeModule],
})
export class TechStackWidgetComponent {
  techStack = [
    { name: 'Python', icon: faPython, color: '#3776ab' },
    { name: 'JavaScript', icon: faJs, color: '#f0db4f' },
    { name: 'TypeScript', icon: faCode, color: '#3178c6' },
    { name: 'Node.js', icon: faNodeJs, color: '#339933' },
    { name: 'Git', icon: faGitAlt, color: '#f05032' },
    { name: 'Discord.js', icon: faDiscord, color: '#7289da' },
    { name: 'GitHub', icon: faGithub, color: '#333333' },
  ];
}
