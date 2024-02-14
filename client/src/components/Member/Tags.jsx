function MemberTags({tags, filter}) {
  return (
      tags.map((tag) =>
        (!filter || (filter && tag.type === filter)) && (
          <span
            className="py-2 px-4 rounded-full font-bold bg-gray-200 text-grey-600"
          >
            {tag.name.replace("Budapest", "Bp").replace("kerület", "ker")}
          </span>
        )
      )
  )
}

export default MemberTags;
