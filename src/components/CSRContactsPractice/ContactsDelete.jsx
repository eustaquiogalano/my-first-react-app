import { redirect } from "react-router";
import { deleteContact } from "./ContactsUtil";

export async function action({ params }) {
  await deleteContact(params.contactID);
  return redirect("/");
}
