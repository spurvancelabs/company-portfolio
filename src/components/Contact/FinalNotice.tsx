import { 
  FileText, 
} from "lucide-react";

const FinalNotice = () => {
  return (
          <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl border-2 border-blue-200 p-10">
            <div className="text-center">
              <FileText className="w-12 h-12 text-blue-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Communications Policy</h3>
              <div className="text-gray-600 space-y-4">
                <p>
                  All communications are subject to our Privacy Policy and Terms of Service. 
                  We may retain communications for legal compliance and quality improvement purposes.
                </p>
                <p>
                  Response times are estimates and may vary based on inquiry volume and complexity.
                  Urgent security matters receive priority attention.
                </p>
                <p className="text-sm text-gray-500">
                  By contacting Spurvance Labs, you acknowledge and agree to our communications policies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default FinalNotice