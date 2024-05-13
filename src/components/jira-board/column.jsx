import PropTypes from 'prop-types';

export function Column(props) {
    const{onDrag,onDrop,title,task}=props
  return (
    <div className="bg-slate-500 h-[70vh] overflow-y-auto w-[250px] items-center flex flex-col gap-[1rem] p-[1rem] mt-[2rem]"  onDrop={onDrop} onDragOver={(e)=>{e.preventDefault()}}>
      
    <h1 className='text-[1.6rem] font-medium'>{title}</h1>
        {task.map((val,index)=>{
            return<div key={index} className='cursor-pointers w-[200px] flex justify-center items-center text-[1.4rem] min-h-[10rem] bg-gray-400' onDragStart={(e)=>{onDrag(e,val,title)}}>
            <h3>{val}</h3></div>
        })}
            </div>

  )
}
Column.propTypes = {
//   description: PropTypes.string.isRequired,
  onDrop:PropTypes.func,
  onDrag:PropTypes.func,
  title:PropTypes.string.isRequired,
  task:PropTypes.array
};

// Column.defaultProps = {
//     title:"TO DO",
//   onDrag: () => {},
//   onDrop: () => {},
// };