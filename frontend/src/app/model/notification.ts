export class Notification {

  notificationId: number;
  notificationType: string;
  notificationTitle: string;
  description: string;
  createdAt: Date;
  userId: number;


  constructor(notificationId: number, notificationType: string, notificationTitle: string, description: string, createdAt: Date, userId: number) {
    this.notificationId = notificationId;
    this.notificationType = notificationType;
    this.notificationTitle = notificationTitle;
    this.description = description;
    this.createdAt = createdAt;
    this.userId = userId;
  }
}
