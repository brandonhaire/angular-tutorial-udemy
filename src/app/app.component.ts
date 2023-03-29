import { Component, ViewChild } from '@angular/core';
import { ClrWizard, ClrWizardPage } from '@clr/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("wizard") wizard: ClrWizard;
  @ViewChild("myForm") formData: any;
  @ViewChild("myFinishPage") finishPage: ClrWizardPage;

  loadingFlag: boolean = false;
  errorFlag: boolean = false;
  checked = false;
  finished = false;
  open: boolean = false;
  answer: number = null;

  // have to define doCancel because page will prevent doCancel from working
  // if the page had a previous button, you would need to call
  // this.wizard.previous() manually as well...
  doCancel(): void {
      this.wizard.close();
  }

  get showCongrats(): boolean {
    return !this.errorFlag && this.checked;
  }

  resetFinalPage(): void {
    this.loadingFlag = false;
    this.errorFlag = false;
    this.checked = false;
  }

  goBack(): void {
    this.wizard.previous();
  }

  doFinish(): void {
    this.wizard.forceFinish();
    this.resetFinalPage();
  }

  onCommit(): void {
      let value: any = this.formData.value;
      this.loadingFlag = true;
      this.errorFlag = false;

      if (this.finished) {
        this.doFinish();
        return;
      }

      setTimeout(() => {
          if (value.answer === "42") {
            this.finished = true;
          } else {
              this.finishPage.completed = false;
              this.errorFlag = true;
          }
          this.checked = true;
          this.loadingFlag = false;
      }, 1000);
  }
}
