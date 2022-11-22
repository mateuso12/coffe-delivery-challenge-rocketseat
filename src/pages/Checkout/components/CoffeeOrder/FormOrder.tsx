import { useForm } from 'react-hook-form'
import { FormOrderContainer } from './styles'

export function FormOrder() {
  const { register } = useForm()

  return (
    <FormOrderContainer>
      <input
        className={'cep'}
        type="text"
        placeholder="CEP"
        {...register('cep')}
      />
      <input
        className={'road'}
        type="text"
        placeholder="Rua"
        {...register('road')}
      />
      <input
        className={'number'}
        type="number"
        placeholder="Número"
        {...register('number')}
      />
      <input
        className={'complement'}
        type="text"
        placeholder="Complemento"
        {...register('complement')}
      />
      <input
        className={'district'}
        type="text"
        placeholder="Bairro"
        {...register('district')}
      />
      <input
        className={'city'}
        type="text"
        placeholder="Cidade"
        {...register('city')}
      />
      <input
        className={'uf'}
        type="text"
        placeholder="UF"
        {...register('uf')}
      />
    </FormOrderContainer>
  )
}
