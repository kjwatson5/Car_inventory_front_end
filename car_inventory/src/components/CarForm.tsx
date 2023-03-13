import Button from "./Button"
import Input from "./Input"

import { useForm } from "react-hook-form"
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseMake, chooseModel, chooseYear, chooseColor } from "../redux/slices/RootSlice"

// interfaces

interface CarFormProps {
  id?: string,
  data?: {}
}

const CarForm = (props: CarFormProps) => {
  const { register, handleSubmit } = useForm ({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${props.id}`);
    if (props.id) {
      server_calls.update(props.id, data)
      console.log(`Updated ${ data.name } ${ props.id }`)
      setTimeout(() => {window.location.reload(), 1000});
      event.target.reset()
    } else{
      //Use dispatch to update our state in our store
      dispatch(chooseMake(data.Make));
      dispatch(chooseModel(data.Model));
      dispatch(chooseYear(data.Year));
      dispatch(chooseColor(data.Color))

      server_calls.create(store.getState())
      setTimeout( () => {window.location.reload()}, 1000);
    }
  }

  return (

    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="Make">Car Make</label>
          <Input {...register('Make')} name = 'Make' placeholder="Make"/>
        </div>
        <div>
          <label htmlFor="Model">Model</label>
          <Input {...register('Model')} name = 'Model' placeholder="Model"/>
        </div>
        <div>
          <label htmlFor="Year">Year Number</label>
          <Input {...register('Year')} name = 'Year' placeholder="Year"/>
        </div>
        <div>
          <label htmlFor="Color">Color</label>
          <Input {...register('Color')} name = 'Color' placeholder="Color"/>
        </div>
      </form>
      <div className="flex p-1">
        <Button
          className='flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white'
        >
          Submit
        </Button>
      </div>
    </div>
  )
}

export default CarForm
