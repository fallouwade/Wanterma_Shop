import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer>
                <div className="flex flex-col justify-center items-center  bg-[#f6f7fb]  py-10 ">
                    <h5>Wanterma ?</h5>
                    <p className="text-gray-300">Abonnez-vous à notre newsletter pour recevoir des mises à jour sur nos dernières offres!</p>
                    <div className="pt-5 ">
                        <div className="input-group flex ">
                            <input type="email" className="px-3 py-1 border rounded-sm border-gray-300 w-72" placeholder="Email Address" />
                            <div className="input-group-append">
                                <button className="py-1 px-3 bg-slate-950 text-white" type="button" id="button-addon2">S'abonner</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex sm:flex-row flex-col gap-3 px-5 justify-around bg-slate-950 py-8 text-white">
                    <div>
                        <h5 className='font-bold'>A propos</h5>
                        <ul className="">
                            <li>
                                <a className="text-gray-400" aria-current="page" href="/">Entreprise</a>
                            </li>
                            <li>
                                <a className="text-gray-400" aria-current="page" href="/">Localisation</a>
                            </li>
                            <li>
                                <a className="text-gray-400" aria-current="page" href="/">Contacts</a>
                            </li>
                            <li>
                                <a className="text-gray-400" aria-current="page" href="/">Horaires d'ouvertures</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className='font-bold'>Liens utiles</h5>
                        <ul className=" text-small">
                            <li>
                                <a className="text-gray-400" aria-current="page" href="/">Aide</a>
                            </li>
                            <li>
                                <a className="text-gray-400" aria-current="page" href="/">Politique de confidentialité</a>
                            </li>
                            <li>
                                <a className="text-gray-400" aria-current="page" href="/">Termes et Conditions</a>
                            </li>
                            <li>
                                <a className="text-gray-400" aria-current="page" href="/">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className='font-bold'>Service client</h5>
                        <ul className=" text-small">
                            <li>
                                <a className="text-gray-400" aria-current="page" href="/">Méthodes de paiement</a>
                            </li>
                            <li>
                                <a className="text-gray-400" aria-current="page" href="/">Remboursement</a>
                            </li>
                            <li>
                                <a className="text-gray-400" aria-current="page" href="/">Retour</a>
                            </li>
                            <li>
                                <a className="text-gray-400" aria-current="page" href="/">Expédition</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className='font-bold'>Nous joindre</h5>
                        <ul className="list-unstyled text-small">
                            <li>
                                <a className="text-gray-400" aria-current="page" href="/">Twitter</a>
                            </li>
                            <li>
                                <a className="text-gray-400" aria-current="page" href="/">Facebook</a>
                            </li>
                            <li>
                                <a className="text-gray-400" aria-current="page" href="/">Instagram</a>
                            </li>
                            <li>
                                <a className="text-gray-400" aria-current="page" href="/">Linkedin</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className=" text-white bg-gray-600 text-center p-3">Cette plateforme est réalisée par<a href="kalikacoach.web.app" target="_blank" rel="noopener noreferrer" className='font-bold '> PROMISING TEAM </a></div>
            </footer>
        </div>
    )
}
