import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChatBot - ChatGPT Clone';
  form!: FormGroup
  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      message: new FormControl(null, [Validators.required])
    })
  }
  chats = [
    {
      user: 'gpt',
      message: 'How can I help you today?'
    },
    {
      user: 'me',
      message: 'I wanted to use ChatBot today.'
    }
  ]

  onSubmit() {
    this.chats.push({ user: 'me', message: this.form.value.message })
    // console.log('submit', this.form.value.message)
    this.chatService.getChat(this.form.value.message).subscribe((val) => {
      // console.log(val.message)
      this.chats.push({ user: 'gpt', message: val.message })
    })
    this.form.reset()
  }

}
