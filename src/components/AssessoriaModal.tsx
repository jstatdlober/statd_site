import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X } from 'lucide-react';

interface AssessoriaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AssessoriaModal({ isOpen, onClose }: AssessoriaModalProps) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/70" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-navy-900 p-6 shadow-xl transition-all border border-blue-500/20">
                <div className="flex justify-between items-start mb-6">
                  <Dialog.Title className="text-2xl font-bold text-white">
                    Assessoria
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="text-gray-300 space-y-6">
                  <div className="space-y-4">
                    <p className="text-lg leading-relaxed">
                      A mentoria em tecnologia auxilia ao manter atualização sobre novidades, tendências e boas práticas.
                    </p>
                    <p className="text-lg leading-relaxed">
                      A Gestão de conhecimento é um processo contínuo, sendo possível obter-se resultados bastante produtivos.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Os processos de negócio podem e devem ser otimizados constantemente.
                    </p>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}