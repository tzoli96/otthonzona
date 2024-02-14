function MemberAttributes({attributes}) {
  return (
      <>
        {attributes &&
            <div className="rounded-2xl bg-white py-8 px-6 card-shadow text-lightgrey text-sm">
              <div className="lg:grid grid-cols-2 gap-5">
                {attributes.map((attribute) => {
                      return (
                          attribute.value &&
                          <div className="my-2">
                            <p className="text-sm font-semibold">{attribute.attribute.label}</p>
                            <p className="text-lg text-gray-900 font-semibold">
                              {attribute.value}
                            </p>
                          </div>
                      );
                    }
                )}
              </div>
            </div>
        }
      </>
  );
}

export default MemberAttributes;
