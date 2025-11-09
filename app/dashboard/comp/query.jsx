"use client";

import { useState } from "react";


import { fetchRecommendations } from "../../lib/api";

export default function query() {
  const [query, setQuery] = useState("");
  const [topK, setTopK] = useState(7);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function handleRecommend() {
    setLoading(true);
    setErrorMsg("");
    try {
      const res = await fetchRecommendations(query, topK);
      setResults(res);
    } catch (e) {
      setErrorMsg("Error communicating with API");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">SHL Assessment Recommender</h1>

      <label>Enter Job Description / Requirement:</label>
      <textarea
        className="w-full border p-3 rounded-lg mt-2 text-white"
        rows={5}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <label className="mt-4 block">Number of Recommendations</label>
      <input
        type="number"
        min={1}
        max={10}
        value={topK}
        onChange={(e) => setTopK(Number(e.target.value))}
        className="border p-2 rounded-lg w-28 mt-2 text-white"
      />

      <button
        onClick={handleRecommend}
        className="m-8 bg-blue-600 text-white mt-4 px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        {loading ? "Loading…" : "Recommend"}
      </button>

      {errorMsg && <p className="text-red-600 mt-4">{errorMsg}</p>}

      {results.length > 0 && (
        <table className="mt-6 w-full border">
          <thead>
            <tr>
              {Object.keys(results[0]).map((key) => (
                <th key={key} className="border px-3 py-2 text-left">
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {results.map((row, i) => (
              <tr key={i}>
                {Object.values(row).map((val, j) => (
                  <td key={j} className="border px-3 py-2">
                    {typeof val === "string" ? val : JSON.stringify(val)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
