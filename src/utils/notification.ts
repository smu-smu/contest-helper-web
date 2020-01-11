import * as firebase from "firebase";

export function requestNotificationPermission(onGranted: () => void) {
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      onGranted();
    }
  });
}

export function saveTokenToServer(token: string, userId: string) {
  firebase.firestore().collection("tokens").doc(userId).set({ token });
}

export function saveTokenToLocal(token: string) {
  window.localStorage.setItem("fcm_token", token);
}

export function loadTokenFromLocal(): string | null {
  return window.localStorage.getItem("fcm_token");
}