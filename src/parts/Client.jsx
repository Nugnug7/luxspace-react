import React from 'react'

export default function Client() {
  return (
    <section className="container mx-auto">
            <div className="flex justify-center flex-wrap">
                <div
                className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0"
                >
                <img src="/images/contents/logo-adobe.svg" alt="" className="mx-auto" />
                </div>
                <div
                className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0"
                >
                <img src="/images/contents/logo-ikea.svg" alt="" className="mx-auto" />
                </div>
                <div
                className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0"
                >
                <img
                    src="/images/contents/logo-hermanmiller.svg"
                    alt=""
                    className="mx-auto"
                />
                </div>
                <div
                className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0"
                >
                <img src="/images/contents/logo-miele.svg" alt="" className="mx-auto" />
                </div>
            </div>
    </section>
  )
}
