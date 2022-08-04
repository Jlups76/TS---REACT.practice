interface ChildProps {
  color: String;
  onClick: () => void;
}

// export const Child = ({ color }: ChildProps) => {
//   return <div>{color}</div>;
// };

export const Child: React.FC<ChildProps> = ({ color, onClick }) => {
  return (
    <div>
      <button onClick={onClick}>Click me!</button>
      {color}
    </div>
  );
};

/*Both of the above methods define a function component and utilize a typescript interface on props.

**HOWEVER**

The second method has several advantages:
1) lets TS know 'Child' is a React function component
2) 'Child' might have properties assigned to it like 'propTypes' and 'contextTypes'
3) 'Child' will recieve props of type 'ChildProps'
*/
