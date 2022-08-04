const EventComponent: React.FC = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log("Im being dragged");
  };
  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag Me!
      </div>
    </div>
  );
};

export default EventComponent;

/*
When defining event handlers that ARE NOT in line.. the TYPE of the event/e will need to be explicitly defined in the event parameter of the callback function.

You can get the TYPE by hovering over the event (ex. onChange) and copy-pasting the event TYPE

*/
