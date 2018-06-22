import { NotificationManager } from "react-notifications";

export const notificationSuccess = (title, description) => {
  NotificationManager.success(description, title, 3000);
};
export const notificationFail = (title, description) => {
  NotificationManager.error(description, title, 5000);
};
