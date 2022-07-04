import {
  modalPetsState,
  modalTutoresState,
  modalVacinasState,
  typeRequestPets,
} from "@/src/atoms/modalAtom";
import MuiModal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import Box from "@mui/material/Box";

import { blue } from "@mui/material/colors";
import { useForm } from "react-hook-form";
import { Pets, Tutores } from "@/typing";
import axios from "axios";

function ModalPets(props: any) {
  const idPet = props.petData.id;
  const petData = props.petData;
  const usersId = props.usersId;
  const [showModal, setShowModal] = useRecoilState(modalPetsState);

  console.log(idPet);
  console.log(usersId);

  const typeRequestPet = useRecoilValue(typeRequestPets);

  const handleClose = () => {
    setShowModal(false);
  };

  let requestFunction: any;

  let defaultValues;

  switch (typeRequestPet) {
    case "POST": {
      requestFunction = postPets;
      console.log(typeRequestPet);
      break;
    }
    case "PUT": {
      defaultValues = petData;
      requestFunction = updatePets;
      console.log(typeRequestPet);
      break;
    }
    default: {
      console.log(typeRequestPet);
    }
  }

  const { register, handleSubmit, formState } = useForm<Pets>({
    defaultValues: {
      id: defaultValues?.id,
      nome: defaultValues?.nome,
      raca: defaultValues?.raca,
      genero: defaultValues?.genero,
      idade: defaultValues?.idade,
      sexo: defaultValues?.sexo,
      castrado: defaultValues?.castrado,
    },
  });

  async function onSubmit(data: Pets, e: any) {
    e.preventDefault();
    data.id = idPet;
    requestFunction(data);
    setShowModal(false);
  }
  async function updatePets(data: any) {
    const { id, nome, raca, genero, idade, sexo, castrado } = data;
    await axios.put(`${process.env.NEXT_PUBLIC_API_HOST}/tutores/pets/${id}`, {
      id,
      nome,
      raca,
      genero,
      idade,
      sexo,
      castrado,
    });
    // .then( () => {
    //   alertService.success('Vacina alterada.', {
    //     keepAfterRouteChange: true,
    //   })
    // })
  }
  //falta alterar o endpoint

  async function postPets(data: any) {
    const { id, nome, raca, genero, idade, sexo, castrado } = data;
    const petsId = idPet;
    await axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/tutores/pets`, {
      usersId,
      petsId,
      nome,
      raca,
      genero,
      idade,
      sexo,
      castrado,
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
                Alteração dos dados do Pet
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
                            Nome do Pet
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
                            Raça
                          </label>

                          <input
                            type="text"
                            className="block h-8 w-full  text-gray-700 bg-white border border-gray-300 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            {...register("raca")}
                            required
                          />
                        </div>
                        <div>
                          <label className="text-principal dark:text-gray-400 font-normal text-sm">
                            Idade (anos)
                          </label>

                          <input
                            type="text"
                            className="block h-8 w-full  text-gray-700 bg-white border border-gray-300 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            {...register("idade")}
                            required
                          />
                        </div>

                        <div className="col-span-2 ">
                          <label className="text-principal dark:text-gray-400  font-normal text-sm">
                            Castrado
                          </label>

                          <select
                            className="block w-full  text-gray-700 bg-white border border-gray-300 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            {...register("castrado")}
                            required
                          >
                            <option value="sim">Sim</option>
                            <option value="nao">Não</option>
                          </select>
                        </div>
                        <div className="col-span-2 ">
                          <label className="text-principal dark:text-gray-400  font-normal text-sm">
                            Gênero
                          </label>

                          <select
                            className="block w-full  text-gray-700 bg-white border border-gray-300 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            {...register("genero")}
                            required
                          >
                            <option value="canino">Canino</option>
                            <option value="felino">Felino</option>
                          </select>
                        </div>

                        <div className="col-span-2 ">
                          <label className="text-principal dark:text-gray-400  font-normal text-sm">
                            Sexo
                          </label>

                          <select
                            className="block w-full  text-gray-700 bg-white border border-gray-300 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            {...register("sexo")}
                            required
                          >
                            <option value="macho">Macho</option>
                            <option value="femea">Fêmea</option>
                          </select>
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

export default ModalPets;
