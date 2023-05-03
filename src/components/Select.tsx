import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { IStation } from "../types/IStation";
import { Dispatch } from "react";

interface ChildPropsSelect {
  stations: IStation[];
  selected: IStation;
  setSelected: Dispatch<React.SetStateAction<IStation>>;
}

const Select = ({ stations, selected, setSelected }: ChildPropsSelect) => {
  return (
    <div>
      <div>
        <h2 className="text-lg tracking-wide dark:text-slate-100">Stations</h2>
      </div>
      <div className="">
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 dark:border dark:border-slate-500 dark:bg-gray-900 dark:text-slate-300">
              <span data-testid="active-station" className="block truncate">
                {selected.name}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:border dark:border-slate-500 dark:bg-gray-900">
                {stations.map((station) => (
                  <Listbox.Option
                    key={station.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active
                          ? "bg-sky-100 text-sky-900"
                          : "text-slate-800 dark:text-slate-300"
                      }`
                    }
                    value={station}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {station.name}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600 dark:text-sky-500">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </div>
  );
};
export default Select;
