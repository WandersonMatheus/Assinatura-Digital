import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

type InputTypes = "text" | "email" | "password";

@Component({
  selector: 'app-primaryinput',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './primaryinput.component.html',
  styleUrl: './primaryinput.component.scss'
})
export class PrimaryinputComponent {
  @Input() type: InputTypes = "text";
  @Input() formName: string = "";
  @Input() placeHolder: string = "";
  @Input() label: string = "";
}
