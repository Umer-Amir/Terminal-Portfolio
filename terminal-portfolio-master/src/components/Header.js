import React from "react";

export default function Header() {
  return (
    <div>
      <pre className="text-left text-lime-500 font-bold mb-2 drop-shadow-xl">
        {`
     _____  __                                 _______             _____         
     __  / / /_______ ___ _____ ________       ___    |_______ ___ ___(_)________
     _  / / / __  __ '__ \_  _ \__  ___/       __  /| |__  __ '__ \__  / __  ___/
     / /_/ /  _  / / / / //  __/_  /           _  ___ |_  / / / / /_  /  _  /    
     \____/   /_/ /_/ /_/ \___/ /_/            /_/  |_|/_/ /_/ /_/ /_/   /_/     
                                                                                            
            `}
      </pre>

      <div className="font-mono text-left ml-10 mb-5 text-slate-300">
        Welcome to my portfolio!
        <br />
        Type <span className="text-green-500">help</span> to get a list of
        available commands.
        <br />
      </div>
    </div>
  );
}
