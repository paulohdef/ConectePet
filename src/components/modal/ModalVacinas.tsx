import {
  modalVacinasState,
  typeRequestVacinas,
  vacinasState,
} from "@/src/atoms/modalAtom";
import MuiModal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import Box from "@mui/material/Box";

import { blue } from "@mui/material/colors";
import { useForm } from "react-hook-form";
import { Vacinas } from "@/typing";
import axios from "axios";

function ModalVacinas(props: any) {
  const idVacina = props.vacinaData.id;
  const vacinaData = props.vacinaData;

  const [showModal, setShowModal] = useRecoilState(modalVacinasState);
  const [vacinas, setVacinas] = useRecoilState(vacinasState);
  const typeRequestVac = useRecoilValue(typeRequestVacinas);

  useEffect(() => {
    if (!vacinas) return;

    console.log("retorno no modal", vacinas);
  }, [vacinas]);

  const handleClose = () => {
    setShowModal(false);
    setVacinas(null);
  };

  let requestFunction: any;

  let defaultValues;

  switch (typeRequestVac) {
    case "POST": {
      requestFunction = postVacinas
      break;
    }
    case "PUT": {
      defaultValues = vacinaData;
      requestFunction = updateVacinas
      break;
    }
    default: {
      console.log(typeRequestVac);
    }
  }

  const { register, handleSubmit, formState } = useForm<Vacinas>({
    defaultValues: {
      id: defaultValues?.id,
      nome: defaultValues?.nome,
      dataInicio: defaultValues?.dataInicio,
      dataFim: defaultValues?.dataFim,
      fornecedor: defaultValues?.fornecedor,
      atendeGenero: defaultValues?.atendeGenero,
    },
  });

  async function onSubmit(data: Vacinas, e: any) {
    e.preventDefault();
    data.id = idVacina;
    console.log(data);
    requestFunction(data);
    setShowModal(false);
  }

  async function updateVacinas(data: any) {
    const { id, nome, dataInicio, dataFim, fornecedor, atendeGenero } = data;
    await axios.put(`${process.env.NEXT_PUBLIC_API_HOST}/vacinas`, {
      id,
      nome,
      dataInicio,
      dataFim,
      fornecedor,
      atendeGenero,
    });
    // .then( () => {
    //   alertService.success('Vacina alterada.', {
    //     keepAfterRouteChange: true,
    //   })
    // })
  }
  async function postVacinas(data: any) {
    const { nome, dataInicio, dataFim, fornecedor, atendeGenero } = data;
    await axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/vacinas`, {
      nome,
      dataInicio,
      dataFim,
      fornecedor,
      atendeGenero,
    });
    // .then( () => {
    //   alertService.success('Vacina alterada.', {
    //     keepAfterRouteChange: true,
    //   })
    // })
  }

  return (
    <MuiModal
      open={showModal}
      onClose={handleClose}
      className="fixed !top-7 left-0 right-0 z-50 mx-auto max-w-2xl overflow-hidden  rounded"
    >
      <>
        <div className="space-x-16 rounded-b-md bg-gray-100 px-4 py-4">
          <div className="space-y-4 text-lg">
            {/*header*/}
            <div className="flex items-start justify-between pb-2  border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-xl font-semibold text-gray-600">
                Alteração de Vacina
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-gray-600   float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => handleClose()}
              >
                <span className="bg-transparent text-gray-600  h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>

            <div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row">
              <div className="flex flex-col space-y-3 text-sm">
                <section className="px-0">
                  <Box
                    sx={{
                      flexGrow: 1,
                      bgcolor: "background.paper",
                      height: 500,
                      width: "100%",
                    }}
                  >
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="grid grid-cols-1 gap-4 mt-0 sm:grid-cols-1 p-8">
                        <div className="col-span-2 ">
                          <label className="text-principal dark:text-gray-500 font-normal text-sm">
                            Nome da Vacina
                          </label>

                          <input
                            type="text"
                            className="block h-8 w-full  text-gray-700 bg-white border border-gray-300 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            {...register("nome")}
                            required
                          />
                        </div>

                        <div>
                          <label className="text-principal dark:text-gray-400 font-normal text-sm">
                            Data de Início
                          </label>

                          <input
                            type="date"
                            className="block h-8 w-full  text-gray-700 bg-white border border-gray-300 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            {...register("dataInicio")}
                            required
                          />
                        </div>

                        <div>
                          <label className="text-principal dark:text-gray-400 font-normal text-sm">
                            Data de encerramento
                          </label>

                          <input
                            type="date"
                            className="block h-8 w-full  text-gray-700 bg-white border border-gray-300 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            {...register("dataFim")}
                            required
                          />
                        </div>

                        <div className="col-span-2 ">
                          <label className="text-principal dark:text-gray-400  font-normal text-sm">
                            Atende qual gênero de animal?
                          </label>

                          <select
                            className="block w-full  text-gray-700 bg-white border border-gray-300 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            {...register("atendeGenero")}
                            required
                          >
                            <option value="Canino">Canino</option>
                            <option value="Felino">Felino</option>
                          </select>
                        </div>
                        <div className="col-span-2 ">
                          <label className="text-principal dark:text-gray-400  font-normal text-sm">
                            Fornecedor
                          </label>

                          <input
                            type="text"
                            className="block h-8 w-full  text-gray-700 bg-white border border-gray-300 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            {...register("fornecedor")}
                            required
                          />
                        </div>
                      </div>

                      {/*footer*/}
                      <div className="flex items-center justify-end  pt-4 border-t border-solid border-blueGray-200 gap-4 rounded-b p-4">
                        <button
                          className="flex-1 px-6 py-2 font-semibold select-none rounded-md text-gray-800 border border-gray-500 bg-transparent hover:bg-gray-50"
                          onClick={() => setShowModal(false)}
                        >
                          Cancelar e Sair
                        </button>

                        <button
                          className="flex-1 px-6 py-2 font-semibold select-none rounded-md text-white bg-gray-600 hover:bg-gray-400"
                          type="submit"
                        >
                          {" "}
                          Salvar alterações
                        </button>
                      </div>
                      {}
                    </form>
                  </Box>
                </section>
              </div>
            </div>
          </div>
        </div>
      </>
    </MuiModal>
  );
}

export default ModalVacinas;
