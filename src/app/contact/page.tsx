import React from 'react';
import TitlePage from '../components/molecule/titlePage';
import InputText from '../components/molecule/inputText';

export default function ContactPage() {
  return (
    <div>
      <TitlePage title="Contact" />
      <div>
        <h2 className="w-3/4 font-semibold text-center mx-auto">
          If you have any questions, need further information, or just want to
          connect, please don't hesitate to contact me. I'm always happy to help
          and look forward to hearing from you!
        </h2>
        <form
          className="flex flex-col gap-7 py-7 md:w-3/4 mx-auto"
          action=""
        >
          <h3 className="font-bold text-2xl">Send me a message</h3>
          <InputText
            name="name"
            placeholder="Name"
            type="text"
          />
          <InputText
            name="email"
            placeholder="Email"
            type="text"
          />
          <textarea
            className="p-2 border-gray-400 border rounded"
            rows={12}
            placeholder="Message"
          />
          <button
            type="submit"
            className="mb-5 bg-emerald-800 p-2 w-[220px] text-slate-100 font-bold text-md rounded-full"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}
