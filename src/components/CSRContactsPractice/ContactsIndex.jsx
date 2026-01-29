import { useLoaderData } from "react-router";
import { getContacts } from "./ContactsUtil";

export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}

export default function ContactsIndex() {
  const { contacts } = useLoaderData();

  return (
    // <p id="zero-state">
    //   This is a demo for React Router.
    //   <br />
    //   Check out{" "}
    //   <a href="https://reactrouter.com">the docs at reactrouter.com</a>.
    // </p>

    <section>
      {contacts.map((contact) => {
        return (
          <div>
            <p>Name: {contact.first}</p>
          </div>
        );
      }) || <p>No Contacts yet</p>}
    </section>
  );
}
