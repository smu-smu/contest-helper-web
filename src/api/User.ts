
import { SignUpForm, baseUrl, ResponseStatus, SignInForm } from ".";
import axios from "axios";

const Paths = {
  signUp: '/account/signup',
  signIn: '/account/signin',
  getProfile: '/accoutn/profile/'
};

export async function signUp({ id, password, username }: SignUpForm) {
  const url = baseUrl + Paths.signUp;
  try {
    const response = await axios.post(url, {
      userId: id,
      password,
      name: username
    });
    return response.status === ResponseStatus.ok;
  } catch (e) {
    return false;
  }
}

export async function signIn({ id, password }: SignInForm) {
  const url = baseUrl + Paths.signIn;
  try {
    const { data } = await axios.post(url, {
      userId: id,
      password
    });
    return (data as any).userId ? data : null;
  } catch (e) {
    return false;
  }
}

export async function getProfile(userId: string) {
  const url = baseUrl + Paths.getProfile + userId;
  try {
    const response = await axios.get(url);
  } catch (e) {

  }
}