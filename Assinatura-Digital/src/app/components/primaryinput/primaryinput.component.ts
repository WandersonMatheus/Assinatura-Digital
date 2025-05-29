import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

type  InputTypes = "Text" | "Email" | "Passwaord"
@Component({
  selector: 'app-primaryinput',
  imports: [ReactiveFormsModule],
  templateUrl: './primaryinput.component.html',
  styleUrl: './primaryinput.component.scss'
})
export class PrimaryinputComponent {
  @Input() type: InputTypes = "Text";
  @Input() formName: String = "";
  @Input() placeHolder: String = "";
}
