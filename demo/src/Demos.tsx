import React from 'react';

export const GlassDemo = () => {
  return (
    <div className="grid grid-cols-2 w-full h-screen">
      {['glass-0', 'glass-1', 'glass-2', 'glass-3'].map((glass, i) => (
        <div
          key={i}
          className="bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=100')] bg-cover bg-center flex items-center justify-center"
        >
          <div className={`${glass} h-[15rem] w-[15rem] flex items-center justify-center text-[#b5b5b5] font-bold text-2xl rounded-md`}>
            {glass}
          </div>
        </div>
      ))}
    </div>
  );
};
