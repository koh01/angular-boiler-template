import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogOverviewComponent } from './modules/shared/dialog-overview/dialog-overview.component';

class MyClass {
  public name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-sample';
  name = '1234';
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const data = new MyClass();
    data.name = this.title;

    const dialogRef = this.dialog.open(DialogOverviewComponent, {
      width: '250px',
      // フォーカス
      autoFocus: true,
      // カスタム背景に設定するclass
      // backdropClass: 'fooooo',
      // よくわからん
      // closeOnNavigation: false,
      // ダイアログの外側をクリックで閉じるか？
      disableClose : true,
      // 背景の有無（trueにすると、裏側のボタンが操作できるようになる）
      hasBackdrop: true,
      data: data,
      // panelClass: 'hogehoge'
    });

    // Gets an observable that is notified when the dialog is finished opening.
    dialogRef.afterOpened();
    // Gets an observable that is notified when the dialog has started closing.
    dialogRef.beforeClosed();
    // Gets an observable that is notified when the dialog is finished closing.
    dialogRef.afterClosed().subscribe(result => {
      this.title = result;
    });
  }
}
