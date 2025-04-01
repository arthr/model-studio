import React, { useState } from 'react';
import uploadService from '../services/uploadService';

function Upload() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [uploadedFile, setUploadedFile] = useState(null);

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        setLoading(true);
        setError(null);

        try {
            const result = await uploadService.uploadFile(file);
            setUploadedFile(result.fileUrl);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
                Upload de Arquivos
            </h1>
            <div
                className="border border-slate-300 dark:border-slate-600 rounded-lg p-8 bg-white dark:bg-slate-800"
            >
                <input
                    type="file"
                    onChange={handleFileUpload}
                    disabled={loading}
                    className="mb-4 text-slate-900 dark:text-white file:mr-4 file:py-2 file:px-4
                    file:rounded-lg file:border-0 file:bg-primary file:dark:bg-primary-dark file:text-white"
                />

                {loading && <p className="text-slate-700 dark:text-slate-300">Carregando...</p>}
                {error && <p className="text-red-600 dark:text-red-400">{error}</p>}

                {uploadedFile && (
                    <div>
                        <h3 className="text-xl font-bold mt-4 mb-2 text-slate-900 dark:text-white">
                            Arquivo enviado:
                        </h3>
                        <img
                            src={uploadedFile}
                            alt="Uploaded"
                            className="max-w-full h-auto"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Upload;
