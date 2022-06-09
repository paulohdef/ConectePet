import Breadcrumb from '@/src/components/breadcrumbs'
import Layout from '@/src/components/templates/Layout'
import Card from '@/src/components/templates/shortcodes/card'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import Link from 'next/link'
import axios from 'axios'
import { alertService } from '@/src/services/alert.service'
import { DefaultValue } from 'recoil'

function AddEdit(props: any) {
  const centro_custo = props?.centro_custo
  const isAddMode = !centro_custo
  const router = useRouter()

  const itemsBreadcrumbs = [
    { title: 'Home', url: '/dashboard', last: false },
    { title: 'Listagem Centro Custo', url: '/centro-custo', last: false },
    { title: 'Centro Custo ', url: `/centro-custo`, last: true },
  ]

  // form validation rules
  const validationSchema = Yup.object().shape({
    nome: Yup.string().required('Nome é requerido'),
    sigla: Yup.string().required('Sigla é requerido'),
    tipo: Yup.string().required('Tipo é requerido'),
    codigo: Yup.string().required('Código é requerido'),
  })
  const formOptions = { resolver: yupResolver(validationSchema) }

  // set default form values if in edit mode

  if (!isAddMode) {
    const { ...defaultValues } = centro_custo  
    formOptions.defaultValues = defaultValues
    
  }
  


  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions)
  const { errors } = formState

  function onSubmit(data: any) {
    return isAddMode ? createUser(data) : updateUser(centro_custo.id, data)
  }

  async function createUser(data: any) {
    const { nome, sigla, tipo, codigo } = data

    try {
      await axios
        .post(`${process.env.NEXT_PUBLIC_API_HOST}/centro-custo`, {
          nome,
          sigla,
          tipo,
          codigo,
        })
        .then(() => {
          alertService.success('Centro de custo adicionado.', {
            keepAfterRouteChange: true,
          })
          router.push('/centro-custo')
        })
    } catch (e) {
      console.error(e)
      alertService.error
    }
  }

  async function updateUser(id: any, data: any) {
    const { nome, sigla, tipo, codigo } = data

    try {
      await axios
        .patch(`${process.env.NEXT_PUBLIC_API_HOST}/centro-custo/${id}`, {
          nome,
          sigla,
          tipo,
          codigo,
        })
        .then(() => {
          alertService.success('Centro de custo alterado.', {
            keepAfterRouteChange: true,
          })
          router.push('/centro-custo')
        })
    } catch (e) {
      console.error(e)
      alertService.error
    }
  }

  return (
    <Layout titulo="Dashboar" subTitulo="Administrar suas informações">
      <div className="pt-4 px-4">
        <div className="flex flex-row mb-4">
          <div className="w-full">
            <Breadcrumb items={itemsBreadcrumbs} home={true} icon="chevrons" />
          </div>
        </div>

        <Card>
          <div className="intro-y box px-5 pt-0 mt-0">
            <div className="flex flex-1 lg:flex-row border-b border-slate-200/60 dark:border-darkmode-400 pb-0 -mx-5">
              <div className="flex flex-1 px-5 items-start justify-start lg:justify-start">
                <div className="w-60 h-20 sm:w-60 sm:h-24 flex-none lg:w-60 lg:h-32 image-fit relative">
                  <div className="text-gray-600">
                    <p className="font-medium text-lg text-blue-800 mb-1">
                      {isAddMode
                        ? 'Novo Centro de custo'
                        : 'Atualizar Centro de custo'}
                    </p>

                    <p className="text-xs">
                      O centro de custo, basicamente, é uma ferramenta de gestão
                      de custos que separa a empresa em setores ou projetos,
                      dependendo da sua atuação. Ou seja, cada centro de custo
                      possui uma parcela independente de responsabilidades, seja
                      operacional ou financeira, e todos juntos representam a
                      empresa como um todo.
                    </p>

                    <p className="text-xs mt-1">
                      Você poderá filtrar seus pagamentos e recebimentos por
                      centro de custo.
                    </p>
                  </div>
                </div>
                <div className="ml-5">
                  <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                      <div className="lg:col-span-2">
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                            <div className="md:col-span-5">
                              <label>Descrição</label>
                              <input
                                type="text"
                                id="nome"
                                {...register('nome')}
                                className={`form-control h-10 border mt-1 rounded px-4 w-full bg-gray-50 ${
                                  errors.nome ? 'is-invalid' : ''
                                }`}
                              />
                              <div className="invalid-feedback text-red-300">
                                {errors.nome?.message}
                              </div>
                            </div>

                            {/* <div className="md:col-span-5">
                              <label>Email Address</label>
                              <input
                                type="text"
                                name="email"
                                id="email"
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                value=""
                                placeholder="email@domain.com"
                              />
                            </div> */}

                            <div className="md:col-span-3">
                              <label>Código</label>
                              <input
                                type="text"
                                id="codigo"
                                {...register('codigo')}
                                className={`form-control h-10 border mt-1 rounded px-4 w-full bg-gray-50 ${
                                  errors.codigo ? 'is-invalid' : ''
                                }`}
                              />
                              <div className="invalid-feedback text-red-300">
                                {errors.codigo?.message}
                              </div>
                            </div>

                            <div className="md:col-span-2">
                              <label>Sigla</label>
                              <input
                                type="text"
                                id="sigla"
                                {...register('sigla')}
                                className={`form-control h-10 border mt-1 rounded px-4 w-full bg-gray-50 ${
                                  errors.sigla ? 'is-invalid' : ''
                                }`}
                              />
                              <div className="invalid-feedback text-red-300">
                                {errors.sigla?.message}
                              </div>
                            </div>

                            <div className="md:col-span-2">
                              <label>Tipo</label>
                              <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                <select
                                  {...register('tipo')}
                                  className={`form-control px-4 appearance-none outline-none rounded text-gray-800 w-full bg-transparent ${
                                    errors.tipo ? 'is-invalid' : ''
                                  }`}
                                >
                                  <option value=""></option>
                                  <option value="C">Crédito</option>
                                  <option value="D">Débito</option>
                                </select>
                              </div>
                              <div className="invalid-feedback text-red-300">
                                {errors.tipo?.message}
                              </div>
                            </div>

                            <div className="md:col-span-2">
                              <label>Prioridade</label>
                              <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                <input
                                  name="state"
                                  id="state"
                                  placeholder="State"
                                  className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                                />
                                <button className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-300">
                                  <svg
                                    className="w-4 h-4 mx-2 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                  </svg>
                                </button>
                                <button className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                                  <svg
                                    className="w-4 h-4 mx-2 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <polyline points="18 15 12 9 6 15"></polyline>
                                  </svg>
                                </button>
                              </div>
                            </div>

                            <div className="md:col-span-1">
                              <label>Código reduzido</label>
                              <input
                                type="text"
                                id="zipcode"
                                className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                placeholder=""
                              />
                            </div>

                            {/* <div className="md:col-span-5">
                              <div className="inline-flex items-center">
                                <input
                                  type="checkbox"
                                  name="billing_same"
                                  id="billing_same"
                                  className="form-checkbox"
                                />
                                <label className="ml-2">
                                  My billing address is different than above.
                                </label>
                              </div>
                            </div> */}

                            {/* <div className="md:col-span-2">
                              <label>How many soda pops?</label>
                              <div className="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                <button className="cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 mx-2"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                  </svg>
                                </button>
                                <input
                                  name="soda"
                                  id="soda"
                                  placeholder="0"
                                  className="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
                                  value="0"
                                />
                                <button className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 mx-2 fill-current"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" />
                                  </svg>
                                </button>
                              </div>
                            </div> */}

                            <div className="md:col-span-5 text-right">
                              <div className="inline-flex items-end">
                                <div className="form-group">
                                  <button
                                    type="submit"
                                    disabled={formState.isSubmitting}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  mr-2"
                                  >
                                    {formState.isSubmitting && (
                                      <div
                                        className="w-4 h-4 inline-flex rounded-full animate-spin justify-center items-center
                                        border-2 border-solid border-blue-200 border-t-transparent mr-2"
                                      ></div>
                                    )}
                                    Confirmar e Salvar
                                  </button>

                                  <Link href="/centro-custo">
                                    <button
                                      type="button"
                                      disabled={formState.isSubmitting}
                                      className="bg-yellow-500 hover:bg-yellow-600  text-white font-bold py-2 px-4 rounded"
                                    >
                                      Cancelar
                                    </button>
                                  </Link>
                                </div>

                                {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Submit
                              </button> */}
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                  {/* <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>
                      {isAddMode
                        ? 'Novo Centro de custo'
                        : 'Atualizar Centro de custo'}
                    </h1>

                    <div className="form-row">
                      <div className="form-group col">
                        <label>Title</label>
                        <select
                          {...register('title')}
                          className={`form-control ${
                            errors.title ? 'is-invalid' : ''
                          }`}
                        >
                          <option value=""></option>
                          <option value="Mr">Mr</option>
                          <option value="Mrs">Mrs</option>
                          <option value="Miss">Miss</option>
                          <option value="Ms">Ms</option>
                        </select>
                        <div className="invalid-feedback">
                          {errors.title?.message}
                        </div>
                      </div>
                      <div className="form-group col-5">
                        <label>First Name</label>
                        <input
                          type="text"
                          {...register('firstName')}
                          className={`form-control ${
                            errors.firstName ? 'is-invalid' : ''
                          }`}
                        />
                        <div className="invalid-feedback">
                          {errors.firstName?.message}
                        </div>
                      </div>
                      <div className="form-group col-5">
                        <label>Last Name</label>
                        <input
                          type="text"
                          {...register('lastName')}
                          className={`form-control ${
                            errors.lastName ? 'is-invalid' : ''
                          }`}
                        />
                        <div className="invalid-feedback">
                          {errors.lastName?.message}
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <button
                        type="submit"
                        disabled={formState.isSubmitting}
                        className="btn btn-primary mr-2"
                      >
                        {formState.isSubmitting && (
                          <span className="spinner-border spinner-border-sm mr-1"></span>
                        )}
                        Save
                      </button>
                      <button
                        type="button"
                        disabled={formState.isSubmitting}
                        className="btn btn-secondary"
                      >
                        Reset
                      </button>
                      <Link href="/users">
                        <a className="btn btn-link"> Cancelar</a>
                      </Link>
                    </div>
                  </form> */}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  )
}

export default AddEdit
