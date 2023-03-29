import {tw} from "typewind";
import {useState} from "react";
import clsx from "clsx";

export default function Home() {
  const [isError, setIsError] = useState(false)
  const [text, setText] = useState('')

  const onSubmit = () => {
    if (text === '') {
      setIsError(true)
      console.error('required')
      return
    }
    console.log(text)
  }

  const onRestError = () => {
    setIsError(false)
  }

  return (
    <>
      <h1 className={tw.text_lg.text_blue_400}>Typewind Demo</h1>
      <p className={'text-sm mt-4'}>Simple String</p>
      <p className={tw.text_sm.mt_4.inset_['1/2']}>Typewind</p>
      {/* ↓ NG */}
      <div className={tw.mr_2 + isError ? tw.text_red_500 : tw.text_black}>NG label</div>
      {/* ↓ OK */}
      <div className={isError ? tw.text_red_500.mt_2 : tw.text_black.mt_2}>OK label1</div>
      {/* ↓ OK */}
      <div className={`${tw.mt_2} ${isError ? tw.text_red_500 : tw.text_black}`}>OK label2</div>
      {/* ↓ OK */}
      <div className={clsx(tw.mt_2, isError ? tw.text_red_500 : tw.text_black)}>OK label3</div>
      <input className={tw.border.border_gray_500} value={text} onChange={(event) => setText(event.currentTarget.value)}/>
      <button className={tw.block.bg_blue_200.p_2.rounded.mt_1} onClick={onSubmit}>Submit</button>
      <button className={tw.block.bg_gray_300.p_2.rounded.mt_1} onClick={onRestError}>Reset Error</button>

      <div className={tw.$container}>
        <div className={tw.$lg(tw.underline)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, non.
        </div>
      </div>
    </>
  )
}
