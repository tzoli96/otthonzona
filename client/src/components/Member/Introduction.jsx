function MemberIntroduction({introduction}) {
  return (
      <div className="light-card-shadow p-6 rounded-2xl bg-white mb-8">
        <p className="card-heading mb-4">Bemutatkozás</p>

        <div
            className="text-lightgrey text-sm"
            dangerouslySetInnerHTML={{ __html: introduction || "" }}
        >
        </div>
      </div>
  );
}

export default MemberIntroduction;
