import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ contacts, onItemDelete }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <ContactItem
        key={id}
        id={id}
        name={name}
        number={number}
        onItemDelete={onItemDelete}
      />
    ))}
  </ul>
);
