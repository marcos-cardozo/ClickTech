import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export const usePrivate = () => {
    
    const router = useRouter()

    const { isAuthenticated } = useAuth()
    
    useEffect(() => {
        if (!isAuthenticated) {
            router.push("/")
        }

    }, [isAuthenticated, router])
}