interface ChildProps {
    color: string
    onClick: ()=>void;
}

// export const Child = ({color, onClick}: ChildProps) =>{
//     return <div>
// {color}
// <button onClick={onClick}>Click</button>
// </div>
// } 

// export const Child: React.FunctionComponent<ChildProps> = ({color}) =>{
//     return <div>{color}</div>
// } 

export const Child: React.FC<ChildProps> = ({color, onClick, children}) =>{
    return <div>
        {color}
        {children}
         <button onClick={onClick}>Click</button>
        </div>
} 