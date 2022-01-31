import React from "react";


/*
  Instructions:
    You'll notice below that we have a Wait component.
    The purpose of Wait is to render the `ui` prop after
    `delay` seconds. Before `delay` seconds, it should
    render `placeholder`.
*/

function Wait ({ delay = 1000, placeholder, ui }) {
  const [waiting, setWaiting] = React.useState(true)
  
  React.useEffect(() => {
    console.log("I am running an effect")
    const interval = window.setTimeout(() => {
      setWaiting(false)
      console.log("sup bro")
    },delay)

    return () => {
      console.log("yo dawg I'm running")
      window.clear(interval)
    }
  },[delay])

  if(waiting) {
    return placeholder
  } else {
    return ui
  }

}

const WaitDelay = () => {
  return (
    <div>
      <Wait 
        delay={3000}
        placeholder={<p>Waiting...</p>}
        ui={<p>This text should appear after 3 seconds.</p>}
      />
    </div>
  );
}

export default WaitDelay