export const ContactItem = ({ id, name, number, onItemDelete }) => (
  <li>
    <p>
      {name}: {number}
    </p>
    <button type="button" onClick={() => onItemDelete(id)}>
      Delete
    </button>
  </li>
);
