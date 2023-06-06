import { IStation } from "../types/IStation";
import { Dispatch } from "react";
import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

interface ChildPropsSelect {
  stations: IStation[];
  selected: IStation;
  setSelected: Dispatch<React.SetStateAction<IStation | null>>;
}

const Select = ({ stations, selected, setSelected }: ChildPropsSelect) => {
  const [query, setQuery] = useState("");

  const filteredStations =
    query === ""
      ? stations
      : stations.filter((station) =>
          station.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="max-w-sm">
      <div>
        <h2 className="text-xl tracking-wide dark:text-slate-100">Stations</h2>
      </div>
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <div
            className="relative w-full cursor-default overflow-hidden rounded-lg bg-white 
            text-left shadow-md dark:border dark:border-slate-500 dark:bg-slate-800"
          >
            <Combobox.Input
              data-testid="active-station"
              className="w-full border-none py-2 pl-3 pr-10 leading-5 text-gray-900 outline-0
              dark:border-slate-500 dark:bg-slate-800 dark:text-slate-300"
              displayValue={(station) => (station as IStation).name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition as={Fragment} afterLeave={() => setQuery("")}>
            <Combobox.Options className="absolute mt-2 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg dark:border dark:border-slate-500 dark:bg-slate-800">
              {filteredStations.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none px-4 py-2 text-slate-800 dark:text-slate-300">
                  Nothing found.
                </div>
              ) : (
                filteredStations.map((station) => (
                  <Combobox.Option
                    key={station.fid}
                    className={({ active }) =>
                      `relative cursor-pointer select-none py-2 pl-10 pr-4 dark:bg-slate-800 ${
                        active
                          ? "bg-sky-700 text-white dark:bg-sky-500"
                          : "text-slate-800 dark:text-slate-300"
                      }`
                    }
                    value={station}
                  >
                    {({ selected, active }) => (
                      <>
                        <span>{station.name}</span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-sky-400"
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default Select;
