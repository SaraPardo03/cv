const Tag = ({ label, color }) => {
  return (
    <li className={`tag ${color} rounded`}>
      {label}
    </li>
  );
};

export default Tag;
