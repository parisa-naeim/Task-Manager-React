function CardAvatar({ assignedTo }) {
  return (
    <>
      <div className="change">
        <span className="material-symbols-outlined avatar" title={assignedTo}>
          person
        </span>
      </div>
    </>
  );
}

export default CardAvatar;
