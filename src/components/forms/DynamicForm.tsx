import React from 'react'
import Module from '../module/Module'

interface Field {
  name: string
  label: string
  type: string
}

interface DynamicFormProps {
  fields: Field[]
  title: string
  onSubmit: (data: Record<string, string>) => void
}

const DynamicForm: React.FC<DynamicFormProps> = ({ fields, title, onSubmit }) => {
  const [formData, setFormData] = React.useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <Module title={title}>
      <form
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {fields.map((field) => (
            <div key={field.name} className="flex flex-col">
              <label
                htmlFor={field.name}
                className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {field.label}
              </label>
              {field.type === 'textarea' ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  onChange={handleChange}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  onChange={handleChange}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-200 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Salvar
          </button>
        </div>
      </form>
    </Module>
  )
}

export default DynamicForm

