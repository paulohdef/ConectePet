import { modalVacinasState } from "@/src/atoms/modalAtom";
import MuiModal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import Box from "@mui/material/Box";

import { blue } from "@mui/material/colors";
import { useForm } from "react-hook-form";

function ModalVacinas() {
  const [showModal, setShowModal] = useRecoilState(modalVacinasState);

  const handleClose = () => {
    setShowModal(false);
  };

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
                    <button
                      className="flex-1 px-6 py-2 font-semibold select-none rounded-md text-gray-800 border border-gray-500 bg-transparent hover:bg-gray-50"
                      onClick={() => setShowModal(false)}
                    >
                      Cancelar e Sair
                    </button>
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
