function CardAvatar({ assignedTo }) {
  return (
    <>
      <div class="change">
        <span class="material-symbols-outlined avatar" title={assignedTo}>
          person
        </span>
      </div>
    </>
  );
}

export default CardAvatar;
